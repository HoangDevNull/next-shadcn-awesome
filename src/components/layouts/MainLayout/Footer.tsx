import Link from 'next/link';

import { Icons } from '@/assets/icons';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <>
      <footer className="pb-48">
        <Separator />
        <div className="container py-8">
          <div className="mb-4 mt-3 flex items-center justify-center gap-2">
            <Link
              href="https://twitter.com/the_hashgraph"
              className="bg-primary flex aspect-square h-9 items-center justify-center rounded-full"
            >
              <Icons.twitterFill />
            </Link>
          </div>
          <p className="mt-4 text-center text-lg font-bold">
            Copyright © 2023 All Rights Reserved The Hashgraph Association
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
