import * as React from 'react';
import Layout from '@/components/layout/Layout';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import { Title } from '@/components/layout/Title';

export default function AboutUs() {
  return (
    <Layout>
      <Title text='hi' color='pink'></Title>
    </Layout>
  );
}
