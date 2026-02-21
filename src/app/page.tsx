import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'مظلات وسواتر ديار جدة العالمية | تركيب برجولات وهناجر',
  description: 'مؤسسة ديار جدة العالمية لتركيب كافة أنواع المظلات، السواتر، البرجولات، الهناجر، وبيوت الشعر في جدة. جودة عالية، تصاميم عصرية، وضمان يمتد لـ 10 سنوات.',
};

export default function Home() {
  return <HomeClient />;
}
