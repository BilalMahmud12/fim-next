import {
    getAllBlogsQuery,
    getAllServicesQuery,
    getOurServicesPageData,
    getSingleBlogQuery,
    getSingleServiceQuery,
    globalSettingsQuery,
    singleCompanyQuery,
    getCompaniesQuery,
    getHomePageContentQuery
} from './queries'

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const globalSettingsEndPoint = 'global'
const homePageContentEndPoint = 'home-page'
const companiesEndPoint = 'companies'
const servicesEndPoint = 'services'
const servicesPageDataEndPoint = 'our-service'
const blogsEndPoint = 'blogs'

export async function getGlobalSettings() {
    try {
        const response = await fetch(`${apiBaseUrl + globalSettingsEndPoint}?${globalSettingsQuery()}`);
        const globalSettings = await response.json();
        return globalSettings.data;
    } catch (error) {
        console.log('error', error)
    }
}

export async function getHomePageContent() {
    try {
        const response = await fetch(`${apiBaseUrl + homePageContentEndPoint}?${getHomePageContentQuery()}`);
        const homePageContent = await response.json();
        return homePageContent.data;
    } catch (error) {
        console.log('error', error)
    }
}

export async function getCompanies() {
    const response = await fetch(`${apiBaseUrl + companiesEndPoint}?${getCompaniesQuery()}`);
    const companies = await response.json();
    return companies.data;
}

export async function getCompany(slug: string) {
    const response = await fetch(`${apiBaseUrl + companiesEndPoint}?${singleCompanyQuery(slug)}`);
    const company = await response.json();
    return company.data[0];
}

export async function getAllServices() {
    try {
        const response = await fetch(`${apiBaseUrl + servicesEndPoint}?${getAllServicesQuery()}`);
        const results = await response.json();
        return results.data;
    } catch (error) {
        console.log('error', error)
    }
}

export async function getService(slug: string) {
    try {
        const response = await fetch(`${apiBaseUrl + servicesEndPoint}?${getSingleServiceQuery(slug)}`);
        const results = await response.json();
        return results.data[0];
    } catch (error) {
        console.log('error', error)
    }
}

export async function getServicesPageData() {
    try {
        const response = await fetch(`${apiBaseUrl + servicesPageDataEndPoint}?${getOurServicesPageData()}`);
        const results = await response.json();
        return results.data;
    } catch (error) {
        console.log('error', error)
    }
}

export async function getAllBlogPosts() {
    try {
        const response = await fetch(`${apiBaseUrl + blogsEndPoint}?${getAllBlogsQuery()}`);
        const results = await response.json();
        return results;
    } catch (error) {
        console.log('error', error)
    }
}

export async function getBlogPost(slug: string) {
    try {
        const response = await fetch(`${apiBaseUrl + blogsEndPoint}?${getSingleBlogQuery(slug)}`);
        const results = await response.json();
        return results.data[0];
    } catch (error) {
        console.log('error', error)
    }
}