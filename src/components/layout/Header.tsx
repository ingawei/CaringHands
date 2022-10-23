import * as React from 'react';

import { Row } from '@/components/layout/Row';
import ButtonLink from '@/components/links/ButtonLink';
import { useRouter } from 'next/router';
import clsx from 'clsx';

function isCurrentPage(currPath: string, linkPath: string) {
  return currPath === linkPath;
}

const CURRENT_PAGE_STYLE = 'text-orange underline';

const ABOUT_US = '/about-us';
const RESOURCES = '/resources';
const THE_TEAM = '/the-team';

export default function Header() {
  const router = useRouter();
  console.log(isCurrentPage(ABOUT_US, router.pathname));
  return (
    <header className='sticky top-0 z-50 w-full bg-inherit'>
      <div className='w-full pt-4 text-center text-lg font-bold text-white md:pt-6 md:text-2xl'>
        CARING HANDS OF HOPE UGANDA
      </div>
      <Row className='mx-auto mt-2 place-content-center gap-8 bg-inherit pb-2 font-medium'>
        <ButtonLink
          href={ABOUT_US}
          variant='light'
          className={clsx(
            isCurrentPage(router.pathname, ABOUT_US) ? CURRENT_PAGE_STYLE : ''
          )}
        >
          About Us
        </ButtonLink>
        <ButtonLink
          href={RESOURCES}
          variant='light'
          className={clsx(
            isCurrentPage(router.pathname, RESOURCES) ? CURRENT_PAGE_STYLE : ''
          )}
        >
          Resources
        </ButtonLink>
        <ButtonLink
          href={THE_TEAM}
          variant='light'
          className={clsx(
            isCurrentPage(router.pathname, THE_TEAM) ? CURRENT_PAGE_STYLE : ''
          )}
        >
          The Team
        </ButtonLink>
      </Row>
    </header>
  );
}
