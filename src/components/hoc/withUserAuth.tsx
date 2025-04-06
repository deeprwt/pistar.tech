"use client";
import React, { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/database/firebase";

const withUserAuth = (WrappedComponent: ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [isUser, setIsUser] = useState<boolean | null>(null);

    useEffect(() => {
      const checkUserRole = async () => {
        if (!user) {
          router.replace("/login");
          return;
        }

        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            if (userData.role === "admin") {
              router.replace("/admin/dashboard"); // Redirect admin users
            } else {
              setIsUser(true);
            }
          } else {
            router.replace("/login");
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          router.replace("/login");
        }
      };

      if (!loading) {
        checkUserRole();
      }
    }, [user, loading, router]);

    if (loading || isUser === null) {
      return <div>Loading...</div>;
    }

    return isUser ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};

export default withUserAuth;
