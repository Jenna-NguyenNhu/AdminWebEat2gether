<div>
  <form
    className={`app-search txt-left ${isShow ? "" : "hide-search"}`}
    onSubmit={(e) => search(e)}
  >
    <div className="wrap">
      <input
        className="searchTerm"
        type="text"
        placeholder="What are you looking for?"
        onChange={updateSearchInput}
      />
      <CButton type="submit" class="searchButton buttons">
        <CImg src={Sear}></CImg>
      </CButton>
    </div>
  </form>
</div>;
