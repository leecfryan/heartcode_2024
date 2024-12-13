import React from 'react';
import Link from 'next/link';

const resources = [
    {
        title: "National Institute on Drug Abuse",
        description: "Leading research organization offering science-based information on drug abuse and addiction.",
        link: "https://www.drugabuse.gov/"
    },
    {
        title: "Substance Abuse and Mental Health Services Administration",
        description: "Federal agency providing substance abuse and mental health information, services, and research.",
        link: "https://www.samhsa.gov/"
    },
    {
        title: "Partnership to End Addiction",
        description: "Nonprofit organization supporting families impacted by addiction with empowering resources.",
        link: "https://drugfree.org/"
    },
    {
        title: "AddictionCenter",
        description: "Informational web guide about addiction, substance use disorders, and recovery options.",
        link: "https://www.addictioncenter.com/"
    },
    {
        title: "DrugAbuse.com",
        description: "Comprehensive resource on substance abuse, addiction, and treatment options.",
        link: "https://drugabuse.com/"
    },
    {
        title: "National Association for Children of Addiction",
        description: "Organization providing support and resources for children impacted by family addiction.",
        link: "https://nacoa.org/"
    }
];

export default function Home() {
    return (
        <div className="min-h-screen w-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-black">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 dark:text-white">
                    Drug Abuse Awareness Resources
                </h1>
                <p className="text-center text-gray-600 mb-12 dark:text-white">
                    Explore these valuable websites dedicated to drug abuse awareness, prevention, and support.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h2>
                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                <Link
                                    href={resource.link}
                                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Website
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <a
                        href="tel:1-800-662-4357"
                        className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Get Help Now: 1-800-662-HELP
                    </a>
                </div>
            </div>
        </div>
    );
}

