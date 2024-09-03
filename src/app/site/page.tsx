import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Spotlight } from '@/components/ui/Spotlight';
import { addOnProducts, pricingCards } from '@/lib/constants';
import clsx from 'clsx';
import { Check, CheckCircle, CircleCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="h-screen  w-full rounded-md flex md:items-center md:justify-center dark:bg-black/[0.96] bg-white antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.2] relative overflow-hidden">
        {/* <div className="h-screen w-full rounded-md md:justify-center dark:bg-black bg-white  dark:bg-lg-white/[0.2] bg-grid-black/[0.2] antialiased relative flex items-center justify-center"> */}
        {/* Radial gradient for the container to give a faded look */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <section className="h-full w-full md:pt-44 mt-[70px] relative flex items-center justify-center flex-col ">
          {/* grid */}

          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
          <h2 className="text-center mt-20">Run your agency, in one place</h2>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h1 className="text-9xl font-bold text-center md:text-[300px]">
              <div className="a bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Plura</span>
              </div>
            </h1>
          </div>
          <div className="flex justify-center items-center relative md:mt-[-70px]">
            <Image
              src={'/assets/preview.png'}
              alt="banner image"
              height={1200}
              width={1200}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
            />
            <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
          </div>
        </section>
      </div>
      <section className="flex justify-center items-center flex-col md:!mt-20 mt-[40px]">
        <h2 className="text-4xl text-center">Choose what fits you right</h2>
        <p className="text-muted-foreground text-center">
          Our straight forward pricing plans are tailored to meet your needs. If
          {" your're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className="flex  justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            //WIP: wire up the free product from the stripe
            <Card
              key={card.title}
              className={clsx('w-[300px] flex flex-col justify-between', {
                '!text-white  bg-[radial-gradient(164.75%_100%_at_50%_0%,#334155_0%,#0F172A_48.73%)]  shadow-2xl  ring-1 ring-gray-900/10 sm:mx-8 lg:mx-0 border border-transparent ':
                  card.title === 'Unlimited Saas',
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx('', {
                    'text-muted-foreground ': card.title !== 'Unlimited Saas',
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span
                  // className=""
                  className={clsx(
                    'text-gray-900 text-4xl font-bold tracking-tight dark:text-white',
                    {
                      'text-white': card.title === 'Unlimited Saas',
                    },
                  )}
                >
                  {card.price}
                  {card.price !== 'Free' && '/mo'}
                </span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div>
                  {card.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CircleCheck className="text-emerald-400 h-6 w-5 flex-none" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/agency?plan=${card.priceId}`} className="w-full">
                  <Button
                    variant="ghost"
                    className={clsx(
                      ' text-emerald-600 ring-1 ring-inset ring-emerald-500 hover:ring-emerald-600 focus-visible:outline-emerald-600 mt-8 rounded-md py-2.5 px-3.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 block w-full',
                      {
                        'bg-emerald-500 text-white hover:bg-emerald-400':
                          card.title === 'Unlimited Saas',
                      },
                    )}
                  >
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
