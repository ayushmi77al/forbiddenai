import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageIntro } from "@/components/PageIntro";
import { SectionRule } from "@/components/SectionRule";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy and data principles of Forbidden AI. Local-first tools, zero data tracking, and transparent engineering.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageFrame>
      <PageIntro
        kicker="05 / Privacy"
        title="Privacy by design. No telemetry theatre."
        lede="We build software with a simple assumption: your data belongs to you, not our servers. When we build developer tools, privacy is architectural, not a legal disclaimer."
      />

      <SectionRule className="my-16 md:my-20" />

      <div className="grid gap-14 md:grid-cols-2">
        <div className="max-w-xl space-y-6 text-lg leading-8 text-white/68">
          <h2 className="font-display text-2xl tracking-tight text-white">
            1. Local-First Tools & Zero Server Storage
          </h2>
          <p>
            Developer tools published by Forbidden AI — including{" "}
            <Link
              href="/tools/erd-forge"
              className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white"
            >
              ERD Forge
            </Link>{" "}
            — are architected as local-first browser applications. Your database schemas,
            table structures, SQL DDL imports, and diagram designs are executed entirely
            within your local browser via WebAssembly (wa-sqlite) and stored in your
            sandboxed Origin Private File System (OPFS).
          </p>
          <p>
            None of your schemas, entity diagrams, queries, or database credentials are
            ever uploaded, stored, logged, or processed on remote servers. If you close your
            browser or clear your local browser storage, your data stays strictly under your control.
          </p>

          <h2 className="pt-6 font-display text-2xl tracking-tight text-white">
            2. Website Analytics & Performance
          </h2>
          <p>
            On our public informational website ({site.url.replace("https://", "")}), we
            collect minimal, privacy-preserving performance metrics using Vercel Analytics
            and Speed Insights. These measurements do not collect personal identifiers,
            cross-site tracking IDs, or IP-based profiling. They exist solely to diagnose
            broken pages, optimize Core Web Vitals, and maintain platform reliability.
          </p>

          <h2 className="pt-6 font-display text-2xl tracking-tight text-white">
            3. Communications & Inquiries
          </h2>
          <p>
            When you contact Forbidden AI regarding consulting, software development, or tool
            feedback, any information you provide (such as your name and email address) is used
            exclusively to communicate directly with you regarding your inquiry. We do not sell,
            rent, or share your contact details with data brokers, advertisers, or third-party marketing networks.
          </p>
        </div>

        <dl className="space-y-8 border-l border-white/12 pl-8">
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Tool Storage Architecture
            </dt>
            <dd className="mt-2 text-white/80">
              In-Browser OPFS (SQLite WebAssembly) — 100% Client-Side
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Account Requirements
            </dt>
            <dd className="mt-2 text-white/80">
              No account, registration, or credentials required
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Third-Party Advertising
            </dt>
            <dd className="mt-2 text-white/80">
              None — zero ad tracking or data brokers
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Inquiries & Contact
            </dt>
            <dd className="mt-2 text-white/80">
              <Link
                href="/contact"
                className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white"
              >
                forbiddenai.in/contact
              </Link>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-white/40 uppercase">
              Last Updated
            </dt>
            <dd className="mt-2 text-white/80">October 2026</dd>
          </div>
        </dl>
      </div>

      <SectionRule className="my-16 md:my-20" />

      <blockquote className="max-w-2xl font-display text-3xl leading-snug tracking-tight italic md:text-4xl">
        Your architecture is sensitive. We keep it where it belongs — in your hands.
      </blockquote>
    </PageFrame>
  );
}

