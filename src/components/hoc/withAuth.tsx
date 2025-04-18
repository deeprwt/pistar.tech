"use client";
import React, { ComponentType, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import useAuth from "@/hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/database/firebase"; // Ensure correct path

const withAuth = (WrappedComponent: ComponentType) => {
  const ComponentWithAuth = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    useEffect(() => {
      const checkUserRole = async () => {
        if (!user) {
          router.replace("/admin/login");
          return;
        }

        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            if (userData.role !== "admin") {
              router.replace("/"); // Redirect if not an admin
            } else {
              setIsAdmin(true);
            }
          } else {
            router.replace("/admin/login"); // Redirect if user data doesn't exist
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          router.replace("/admin/login");
        }
      };

      if (!loading) {
        checkUserRole();
      }
    }, [user, loading, router]);

    if (loading || isAdmin === null) {
      return <div>Loading...</div>; // Show loading while checking role
    }

    return isAdmin ? <WrappedComponent {...props} /> : null; // Render only if admin
  };

  return ComponentWithAuth;
};

export default withAuth;
