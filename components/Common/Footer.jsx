import { footerLinks } from '@/lib/constants/links'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import React from 'react'
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';
import { getLocale } from 'next-intl/server';

const Footer = () => {
  const t = useTranslations('Footer')
  const l = useTranslations('Links')
  return (
    <footer className='bg-neutral-700/25 pt-12'>
      <div className="container mx-auto mb-8 px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-x-12">
          <div className="">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                width={180}
                height={120}
                className=""
                alt="Tirze-med"
              />
            </Link>
            <p>{t('footer_text')}</p>
          </div>
          <div className='order-3 lg:order-none'>
            <p className='text-lg font-bold mb-2 uppercase tracking-wider'>{t('top_products')}</p>
            <ul className='space-y-1 !ps-0 list-disc list-inside'>
              {
                footerLinks.productLink.map((link) => (
                  <li key={link.label}><Link className='text-neutral-600 hover:text-fuchsia-800 hover:underline' href={link.slug}>{link.label}</Link></li>
                ))
              }
            </ul>
          </div>
          <div className='order-4 lg:order-none'>
            <p className='text-lg font-bold mb-2 uppercase tracking-wider'>{t('imp_link')}</p>
            <ul className='space-y-1 !ps-0 list-disc list-inside'>
              {
                footerLinks.quickLinks.map((link) => (
                  <li key={link.label}><Link className='text-neutral-600 hover:text-fuchsia-800' href={link.slug}>{l(link.label)}</Link></li>
                ))
              }
            </ul>
          </div>
          <div className=''>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 py-2 mt-12">
        <p className="text-center text-white font-semibold">Tirze-Med © 2025 || All Right's Reserved</p>
      </div>
    </footer>
  )
}

export default Footer