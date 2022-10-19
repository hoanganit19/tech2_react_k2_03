class Url{
    constructor(){
        this.home = '/';
        this.about = '/about-us';
        this.products = '/products'
    }

    getProductLink = (id, slug) => {
        return `/san-pham/${id}/${slug}`;
        //san-pham/1/san-pham-abc
    }
}

export default Url;