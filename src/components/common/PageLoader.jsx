import "./PageLoader.css";

export default function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-content">

        <div className="page-loader-spinner" />

        <h1>Finsights</h1>

        <p>Loading...</p>

      </div>
    </div>
  );
}