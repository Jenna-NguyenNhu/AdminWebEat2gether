{
  userRData.reports.map((item, key) => (
    <div key={key} className="thumbnail">
      <div className="caption">
        <p className="if">
          <h1>{item.status}</h1>
          {/* userRData.reports[0].content */}
        </p>
      </div>
    </div>
  ));
}
