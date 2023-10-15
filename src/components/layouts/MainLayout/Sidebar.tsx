import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

import { Icons } from '@/assets/icons';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { HStack } from '@/components/ui/Utilities';
import { ROUTE } from '@/types';

const Sidebar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <HStack spacing={24}>
        <Button variant="ghost" size="mixin" onClick={toggle}>
          <Icons.menu className="text-white" />
        </Button>
      </HStack>
      <Sheet open={opened} onOpenChange={toggle}>
        <SheetContent className="bg-secondary" fullWidth>
          <div className={'h-header -mt-6 flex items-center justify-between py-4'}>
            <Link className="-ml-4" href={ROUTE.HOME}>
              <Logo width={160} height={60} />
            </Link>
            <Button variant="ghost" size="mixin" onClick={toggle}>
              <Icons.X />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
