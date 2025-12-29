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

const MobileMenu = ({ categories }: { categories: Category[] }) => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer" />
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
                        <motion.div
                          whileHover={{ color: "hsl(var(--primary))" }}
                        >
                          <AccordionTrigger
                            className={`${mobTitleStyles} hover:no-underline`}
                          >
                            {item.title}
                          </AccordionTrigger>
                        </motion.div>
                        <AccordionContent>
                          <Link
                            className="pl-6 block font-light py-2"
                            href="/nekretnine"
                          >
                            <motion.li
                              whileHover={{ color: "hsl(var(--primary))" }}
                            >
                              Sve nekretnine
                            </motion.li>
                          </Link>
                          {categories.map((category) => (
                            <Link
                              className="pl-6 block font-light py-2"
                              key={category._id}
                              href={`/nekretnine?kategorija=${category.slug.current}`}
                            >
                              <motion.li
                                whileHover={{ color: "hsl(var(--primary))" }}
                              >
                                {category.title}
                              </motion.li>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Fragment>
                );
              }

              if (item.list)
                return (
                  <Fragment key={index}>
                    <Accordion type="single" collapsible>
                      <AccordionItem className="border-none" value="item-1">
                        <motion.div
                          whileHover={{ color: "hsl(var(--primary))" }}
                        >
                          <AccordionTrigger
                            className={`${mobTitleStyles} hover:no-underline`}
                          >
                            {item.title}
                          </AccordionTrigger>
                        </motion.div>
                        <AccordionContent>
                          {item.list.map((link, index2) => (
                            <Link
                              className="pl-6 block font-light py-2"
                              key={`${index}.${index2}`}
                              href={link.link}
                            >
                              <motion.li
                                whileHover={{ color: "hsl(var(--primary))" }}
                              >
                                {link.title}
                              </motion.li>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Fragment>
                );
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = ({ categories, scrolled }: { categories: Category[], scrolled: boolean }) => (
  <ul className="hidden gap-8 lg:flex  text-xl">
    {navList.map((item, index) => {
      // Ako je "Nekretnine", prikaži kategorije
      if (item.title === "Nekretnine" && categories.length > 0) {
        return (
          <HoverCard key={index} openDelay={0} closeDelay={50}>
            <HoverCardTrigger>
              <motion.div
                animate={{ color: scrolled ? "hsl(var(--primary))" : "#ffffff" }}
                whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
                className="flex gap-1 transition-colors cursor-pointer"
              >
                {item.title}
                <ChevronDownIcon className="w-[18px]" />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              <motion.li
                whileHover={{
                  backgroundColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary-foreground))",
                }}
              >
                <Link className="px-2 py-2 block" href="/nekretnine">
                  Sve nekretnine
                </Link>
              </motion.li>
              {categories.map((category) => (
                <motion.li
                  key={category._id}
                  whileHover={{
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                >
                  <Link
                    className="px-2 py-2 block"
                    href={`/nekretnine?kategorija=${category.slug.current}`}
                  >
                    {category.title}
                  </Link>
                </motion.li>
              ))}
            </HoverCardContent>
          </HoverCard>
        );
      }

      if (item.list)
        return (
          <HoverCard key={index} openDelay={0} closeDelay={50}>
            <HoverCardTrigger>
              <motion.div
                animate={{ color: scrolled ? "hsl(var(--primary))" : "#ffffff" }}
                whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
                className="flex gap-1 transition-colors"
              >
                {item.title}
                <ChevronDownIcon className="w-[18px]" />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="p-0">
              {item.list.map((link, index2) => (
                <motion.li
                  key={`${index}.${index2}`}
                  whileHover={{
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                >
                  <Link className="px-2 py-2 block" href={link.link}>
                    {link.title}
                  </Link>
                </motion.li>
              ))}
            </HoverCardContent>
          </HoverCard>
        );
      return (
        <Link key={index} href={item.link}>
          <motion.li
            animate={{ color: scrolled ? "hsl(var(--primary))" : "#ffffff" }}
            className="transition-colors underline-animation"
            whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
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
      <nav className="flex items-center justify-between px-8 py-4 max-w-[80rem] w-full font-bold">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="Bona Fides Nekretnine Nova"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>
        <DesktopNav categories={categories} scrolled={scrolled} />
        <Link href="tel:+381638226026">
          <motion.button
            animate={{
              color: scrolled ? "hsl(var(--primary))" : "#ffffff",
              borderColor: scrolled ? "hsl(var(--primary))" : "#ffffff"
            }}
            whileHover={{
              color: "hsl(var(--foreground))",
              backgroundColor: "hsl(var(--primary))",
            }}
            className="items-center justify-center rounded-full border-2 text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 transition-colors flex gap-2"
          >
            <PhoneIcon />
            <p className="">+381 63 822 6026</p>
          </motion.button>
        </Link>
        <MobileMenu categories={categories} />
      </nav>
    </header>
  );
}
