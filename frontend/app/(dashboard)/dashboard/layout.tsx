import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import type { Metadata } from 'next';
import Favicon from '@/components/ui/favicon';
import Document, { Head, Html, Main, NextScript, DocumentContext } from "next/document";



export const metadata: Metadata = {
  title: 'HeliosAI',
  description: 'F1 Race Prediction Application'
};


export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">{children}</main>
      </div>
    </>
  );
}
