import { FC } from "react";
import "./SingeListing.scss";

interface Listing {
  id?: number,
  company?: string,
  new?: boolean, 
  featured?: boolean,
  position?: string,
  role?: string, 
  level?: string,
  postedAt?: string,
  contract?: string,
  location?: string,
  languages?: [],
  tools?: []
}

export const SingleListing: FC<Listing> = (listing) => {
  return (
    <article className="listing">
      <div className="listing-header"></div>
      <div className="listing-body">
        <h2 className="listing-title">{listing.position}</h2>
        <div className="listing-details">
          <span>{listing.postedAt}</span>
          <span>{listing.level}</span>
          <span>{listing.location}</span>
        </div>
      </div>
      <div className="label-container"></div>
    </article>
  );
}