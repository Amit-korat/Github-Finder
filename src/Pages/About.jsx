function About() {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-6xl mb-6 text-gray-800">Github Finder</h1>
      <p className="mb-6 text-2xl font-light text-gray-600">
        A React app to search GitHub profiles and view profile details.
      </p>
      <p className="mb-4 text-2xl font-light text-gray-600">
        <span className="font-semibold">Email:</span>
        <a href="mailto:amit.korat@outlook.com" className="text-blue-500 underline ml-2">
          amit.korat@outlook.com
        </a>
      </p>
    </div>
  );
}

export default About;
