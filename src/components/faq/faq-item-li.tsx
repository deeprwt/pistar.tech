import React from "react";

// type
type IPropType = {
  id: number;
  title: string;
  desc: string[]; // Change desc type to an array of strings
  isShow?: boolean;
  parent: string;
  cls?: string;
}

const FaqItemLi = ({ id, title, isShow, desc, parent, cls }: IPropType) => {
  return (
    <div className="accordion-item">
      <div className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${cls ? cls : ''} ${isShow ? '' : 'collapsed'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={isShow ? 'true' : 'false'}
          aria-controls={`collapse-${id}`}
        >
          {title}
        </button>
      </div>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${isShow ? 'show' : ''}`}
        aria-labelledby={`heading-${id}`}
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">
          <ul>
            {desc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqItemLi;
