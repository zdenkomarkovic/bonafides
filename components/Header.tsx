"use client";

import Image from "next/image";
import Logo from "../public/android-chrome-192x192.png";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon, PhoneIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { navList } from "@/constants/index";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";
import { getCategories } from "@/sanity/lib/api";
import { Category } from "@/types/property";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = ({
  categories,
  scrolled,
}: {
  categories: Category[];
  scrolled: boolean;
}) => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <motion.div
        animate={{
          color: scrolled ? "hsl(var(--primary))" : "#ffffff",
        }}
      >
        <MenuIcon className="cursor-pointer" />
      </motion.div>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              // Ako je "Nekretnine", prikaži kategorije
              if (item.title === "Nekretnine" && categories.length > 0) {
                return (
                  <Fragment key={index}>
                    <Accordion type="single" collapsible>
                      <AccordionItem className="border-none" value="item-1">
                        <AccordionTrigger
                          className={`${mobTitleStyles} hover:no-underline`}
                        >
                          {item.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <SheetClose asChild>
                            <Link
                              className="pl-6 block font-light py-2"
                              href="/nekretnine"
                            >
                              <li>Sve nekretnine</li>
                            </Link>
                          </SheetClose>
                          {categories.map((category) => (
                            <SheetClose asChild key={category._id}>
                              <Link
                                className="pl-6 block font-light py-2"
                                href={`/nekretnine?kategorija=${category.slug?.current || ''}`}
                              >
                                <li>{category.title}</li>
                              </Link>
                            </SheetClose>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Fragment>
                );
              }

              return (
                <SheetClose asChild key={index}>
                  <Link href={item.link}>
                    <li className={mobTitleStyles}>{item.title}</li>
                  </Link>
                </SheetClose>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = ({
  categories,
  scrolled,
}: {
  categories: Category[];
  scrolled: boolean;
}) => (
  <ul className="hidden gap-8 lg:flex  text-xl">
    {navList.map((item, index) => {
      // Ako je "Nekretnine", prikaži kategorije
      if (item.title === "Nekretnine" && categories.length > 0) {
        return (
          <HoverCard key={index} openDelay={0} closeDelay={50}>
            <HoverCardTrigger>
              <motion.div
                animate={{
                  color: scrolled ? "hsl(var(--primary))" : "#ffffff",
                }}
                whileHover={{ scale: 1.1 }}
                className="flex gap-1 transition-colors cursor-pointer"
              >
                {item.title}
                <ChevronDownIcon className="w-[18px]" />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <li className="hover:bg-primary/10 transition-colors">
                <Link className="px-2 py-2 block" href="/nekretnine">
                  Sve nekretnine
                </Link>
              </li>
              {categories.map((category) => (
                <li
                  key={category._id}
                  className="hover:bg-primary/10 transition-colors"
                >
                  <Link
                    className="px-2 py-2 block"
                    href={`/nekretnine?kategorija=${category.slug?.current || ''}`}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </HoverCardContent>
          </HoverCard>
        );
      }

      return (
        <Link key={index} href={item.link}>
          <motion.li
            animate={{ color: scrolled ? "hsl(var(--primary))" : "#ffffff" }}
            className="transition-colors underline-animation"
            whileHover={{ scale: 1.1 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error loading categories:", error);
      }
    };

    loadCategories();
  }, []);

  return (
    <header
      className={`flex justify-center ${
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav className="flex items-center justify-between px-8 py-1 max-w-[80rem] w-full font-bold">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="Bona Fides Nekretnine Nova"
            width={80}
            height={80}
            className=""
          />
        </Link>
        <DesktopNav categories={categories} scrolled={scrolled} />
        <Link href="tel:+381638226026">
          <motion.button
            animate={{
              color: scrolled ? "hsl(var(--primary))" : "#ffffff",
              borderColor: scrolled ? "hsl(var(--primary))" : "#ffffff",
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="items-center justify-center rounded-full border-2 text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 transition-colors flex gap-2"
          >
            <PhoneIcon />
            <p className="">+381 63 822 6026</p>
          </motion.button>
        </Link>
        <MobileMenu categories={categories} scrolled={scrolled} />
      </nav>
    </header>
  );
}
