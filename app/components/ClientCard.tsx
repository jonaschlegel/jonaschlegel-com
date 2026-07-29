import Image from 'next/image';
import type { FC } from 'react';
import { BsQuote } from 'react-icons/bs';
import type { ClientType } from '../../types/global';

/** Testimonial card displaying a client quote, name, and role. */
const ClientCard: FC<ClientType> = (props) => {
  return (
    <figure className="flex h-full flex-col">
      <BsQuote
        className="mb-5 text-4xl text-primary-green"
        aria-hidden="true"
      />
      <blockquote className="flex-1">
        <p className="my-0 text-base leading-relaxed text-gray-700 md:text-lg">
          {props.comment}
        </p>
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <div className="relative aspect-square h-12 overflow-hidden rounded-full">
          <Image
            src={props.image}
            alt={`Portrait of ${props.name}`}
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
        <div>
          <p className="my-0 font-semibold text-primary-dark">{props.name}</p>
          <p className="my-0 text-sm text-gray-700">{props.role}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default ClientCard;
