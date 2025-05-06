import React, { useState } from "react";

const PageConfigForm = () => {
  const [pageConfig, setPageConfig] = useState([
    {
      slug: "/",
      config: {
        hero: {
          title: "Index",
          description: "kajsdfkasdkfjkasdjf",
        },
        intro: {
          title: "Intro 1",
          description: "aksdjfksjdfkjskdjf",
        },
      },
    },
  ]);

  const [newPage, setNewPage] = useState({
    slug: "",
    heroTitle: "",
    heroDescription: "",
    introTitle: "",
    introDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPage({ ...newPage, [name]: value });
  };

  const addPageConfig = () => {
    const { slug, heroTitle, heroDescription, introTitle, introDescription } =
      newPage;

    if (!slug) {
      alert("Slug is required!");
      return;
    }

    const newEntry = {
      slug,
      config: {
        hero: {
          title: heroTitle,
          description: heroDescription,
        },
        intro: {
          title: introTitle,
          description: introDescription,
        },
      },
    };

    setPageConfig([...pageConfig, newEntry]);
    setNewPage({
      slug: "",
      heroTitle: "",
      heroDescription: "",
      introTitle: "",
      introDescription: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Page Config Builder
        </h1>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Add New Page
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={newPage.slug}
                onChange={handleChange}
                placeholder="Enter slug (e.g., /about)"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hero Title
              </label>
              <input
                type="text"
                name="heroTitle"
                value={newPage.heroTitle}
                onChange={handleChange}
                placeholder="Enter hero title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Hero Description
              </label>
              <textarea
                name="heroDescription"
                value={newPage.heroDescription}
                onChange={handleChange}
                placeholder="Enter hero description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Intro Title
              </label>
              <input
                type="text"
                name="introTitle"
                value={newPage.introTitle}
                onChange={handleChange}
                placeholder="Enter intro title"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Intro Description
              </label>
              <textarea
                name="introDescription"
                value={newPage.introDescription}
                onChange={handleChange}
                placeholder="Enter intro description"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            onClick={addPageConfig}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700"
          >
            Add Page
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Current Page Config
          </h2>
          <pre className="bg-gray-200 p-4 rounded-md overflow-x-auto">
            {JSON.stringify(pageConfig, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default PageConfigForm;
