"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (shecdoma) {
        console.error("Error fetching product:", shecdoma);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <main className={styles.page}>
      <p className={styles.loading}>Loading product details...</p>
    </main>;
  }

  return (
    <main className={styles.page}>
      <article className={styles.product}>
        <div className={styles.imagePanel}>
          <img className={styles.image} src={product.image} alt={product.title} />
        </div>
        <div className={styles.details}>
          <p className={styles.eyebrow}>Product details</p>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
      </article>
    </main>
  );
}
