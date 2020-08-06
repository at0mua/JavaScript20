const apiKey = '17753930-92228c8f53e05da38e171658f';

export default {
  serchRequets: '',
  page: 1,
  fetchRequets() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.serchRequets}&page=${this.page}&per_page=12&key=${apiKey}`;
    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.serchRequets;
  },
  set query(newQuery) {
    this.serchRequets = newQuery;
  },
};
