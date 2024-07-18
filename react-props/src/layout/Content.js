import Product from "../components/Product";

const Content = () => {
  const listProduct = [
    {
      name: "Fancy Product",
      type: 1,
      price1: "40.000",
      price2: "80.000",
    },
    {
      name: "Special Item",
      type: 2,
      price1: "20.00",
      price2: "18.00",
      isSale: true,
      isReview: true,
    },
    {
      name: "Sale Item",
      type: 2,
      price1: "50.00",
      price2: "25.00",
      isSale: true,
    },
    {
      name: "Popular Item",
      type: 3,
      price1: "40.00",
      isReview: true,
    },
    {
      name: "Sale Item",
      type: 2,
      price1: "50.00",
      price2: "25.00",
      isSale: true,
    },
    {
      name: "Fancy Product",
      type: 1,
      price1: "120.000",
      price2: "280.000",
    },
    {
      name: "Special Item",
      type: 2,
      price1: "20.00",
      price2: "18.00",
      isSale: true,
      isReview: true,
    },
    {
      name: "Popular Item",
      type: 3,
      price1: "40.00",
      isReview: true,
    },
    {
      name: "Fancy Product",
      type: 1,
      price1: "40.000",
      price2: "80.000",
    },
    {
      name: "Special Item",
      type: 2,
      price1: "20.00",
      price2: "18.00",
      isSale: true,
      isReview: true,
    },
    {
      name: "Sale Item",
      type: 2,
      price1: "50.00",
      price2: "25.00",
      isSale: true,
    },
    {
      name: "Popular Item",
      type: 3,
      price1: "40.00",
      isReview: true,
    },
  ];

  const jsxListProduct = listProduct.map((product, index) => (
    <Product
      key={index}
      name={product.name}
      type={product.type}
      price1={product.price1}
      price2={product.price2}
      isSale={product.isSale}
      isReview={product.isReview}
    />
  ));

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {/* <Product name="Fancy Product" type={1} price1="40.000" price2="80.000"/>
        <Product name="Special Item" isSale={true} isReview={true} type={2} price1="20.00" price2="18.00"/>
        <Product name="Sale Item" isSale={true} type={2} price1="50.00" price2="25.00"/>
        <Product name="Popular Item" isReview={true} price1="40.00"/>
        <Product name="Sale Item" isSale={true} type={2} price1="50.00" price2="25.00"/>
        <Product name="Fancy Product" type={1} price1="120.000" price2="280.000"/>
        <Product name="Special Item" isSale={true} isReview={true} type={2} price1="20.00" price2="18.00"/>
        <Product name="Popular Item" isReview={true} price1="40.00"/> */}

          {jsxListProduct}
        </div>
      </div>
    </section>
  );
};

export default Content;