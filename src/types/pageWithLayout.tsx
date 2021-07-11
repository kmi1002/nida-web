import { NextPage } from 'next';
import LoginLayout from '@/templates/LoginLayout';
import AppLayout from '@/templates/AppLayout';

type PageWithLoginLayoutType = NextPage & { layout: typeof LoginLayout };
type PageWithAppLayoutType = NextPage & { layout: typeof AppLayout };

type PageWithLayoutType = PageWithLoginLayoutType | PageWithAppLayoutType;

export default PageWithLayoutType;
