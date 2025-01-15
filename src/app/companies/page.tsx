import type { Metadata } from "next";
import { notFound } from 'next/navigation';
import CompaniesPage from "@views/pages/companiesPage";
import { getCompanies } from "@lib/repository";

export default async function Companies() {
    const companies = await getCompanies();

    if (!companies || companies.length === 0) {
        notFound();
    }

    return (
        <CompaniesPage companies={companies} />
    );
}
