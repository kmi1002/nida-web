import { NextPageContext } from 'next';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    router.push('/login');
  }
};

RedirectPage.getInitialProps = (ctx: NextPageContext) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
  }
  return {};
};

export default RedirectPage;
