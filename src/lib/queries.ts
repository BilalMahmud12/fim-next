import qs from 'qs';

export const globalSettingsQuery = () => qs.stringify({
    populate: {
        DefaultSeo: {
            populate: '*'
        },
        Footer: {
            populate: {
                Navigation: {
                    populate: '*'
                },
                Contacts: {
                    populate: '*'
                }
            }
        },
        Social: {
            populate: '*'
        }
    }
}, {
    encodeValuesOnly: true,
})

export const getHomePageContentQuery = () => {
    return qs.stringify({
        populate: {
            Business: {
                populate: {
                    Video: {
                        populate: '*'
                    }
                }
            },
            About: {
                populate: '*'
            },
            Offers: {
                populate: {
                    'CardsGrid': {
                        populate: '*'
                    }
                }
            }
        }
    }, {
        encodeValuesOnly: true,
    })
}

export const getCompaniesQuery = () => {
    return qs.stringify({
        populate: {
            Cover: {
                populate: '*'
            },
            Slider: {
                populate: {
                    Slides: {
                        populate: '*'
                    }
                }
            },
            Logo: {
                populate: '*'
            }
        }
    }, {
        encodeValuesOnly: true,
    })
}

export const singleCompanyQuery = (slug: string) => {
    return qs.stringify({
        filters: {
            slug: {
                $eq: slug
            }
        },
        populate: {
            Cover: {
                populate: '*'
            },
            SEO: {
                populate: '*'
            },
            Sections: {
                on: {
                    'sections.tabs': {
                        populate: {
                            'TabsContent': {
                                populate: '*'
                            }
                        }
                    },
                    'sections.services-grid': {
                        populate: {
                            'GridItems': {
                                populate: '*'
                            }
                        }
                    },
                    'shared.video': {
                        populate: '*'
                    }
                }
            },
            Slider: {
                populate: '*'
            },
            CallToAction: {
                populate: '*'
            }
        }
    }, {
        encodeValuesOnly: true,
    })
}

export const getAboutUsQuery = () => {
    return qs.stringify({
        populate: {
            SEO: {
                populate: '*'
            },
            Sections: {
                populate: '*'
            }
        }
    }, {
        encodeValuesOnly: true,
    })
}

export const getOurServicesPageData = () => {
    return qs.stringify({
        populate: {
            SEO: {
                populate: '*'
            }
        }
    }, {
        encodeValuesOnly: true,
    })
}

export const getAllServicesQuery = () => {
    return qs.stringify({
        populate: '*'
    }, {
        encodeValuesOnly: true,
    })
}

export const getSingleServiceQuery = (slug: string) => {
    return qs.stringify({
        filters: {
            Slug: {
                $eq: slug
            }
        },
        populate: {
            SEO: {
                populate: '*'
            },
            Cover: {
                populate: '*'
            },
            
        }
    }, {
        encodeValuesOnly: true,
    })
}

export const getAllBlogsQuery = () => {
    return qs.stringify({
        populate: '*'
    }, {
        encodeValuesOnly: true,
    })
}

export const getSingleBlogQuery = (slug: string) => {
    return qs.stringify({
        filters: {
            Slug: {
                $eq: slug
            }
        },
        populate: {
            SEO: {
                populate: '*'
            },
            Cover: {
                populate: '*'
            }
        }
    }, {
        encodeValuesOnly: true,
    })
}