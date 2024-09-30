import Image from 'next/image';
import type { FC } from 'react';
import { BsQuote } from 'react-icons/bs';
import type { ClientType } from '../../types/global';

const ClientCard: FC<ClientType> = (props) => {
  return (
    <div className="">
      <div className="mb-8 flex justify-center">
        <span className="inline-block">
          <BsQuote className="text-5xl text-primary-accent" />
        </span>
      </div>
      <div className="mb-8">
        <p className="text-center text-sm text-neutral-300 md:text-base">
          {props.comment}
        </p>
      </div>
      <div className="flex justify-center gap-2">
        <div className="relative aspect-square h-12 overflow-hidden rounded-full">
          <Image
            src={props.image}
            alt="client profile"
            fill
            className="object-cover"
            sizes="100%"
          />
        </div>
        <div>
          <p>{props.name}</p>
          <p className="text-sm text-neutral-300">{props.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
