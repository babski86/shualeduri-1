import styles from "./page.module.css";

export default async function ProfilePage() {
  let user;

  try {
    const response = await fetch("https://fakestoreapi.com/users/3");
    if (!response.ok) {
      throw new Error(`Could not load profile (${response.status}).`);
    }

    user = await response.json();
    delete user.password;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return (
      <main className={styles.page}>
        <p className={styles.status} role="alert">
          We couldn&apos;t load this profile. Please try again later.
        </p>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Your account</p>
        <h1>Profile</h1>
        <p className={styles.subtitle}>Personal details and contact information</p>
      </header>

      <section className={styles.profileCard} aria-label="Profile details">
        <div className={styles.identity}>
          <div className={styles.avatar} aria-hidden="true">
            {user.name.firstname[0]}
            {user.name.lastname[0]}
          </div>
          <div>
            <h2 className={styles.name}>
              {user.name.firstname} {user.name.lastname}
            </h2>
            <p className={styles.username}>@{user.username}</p>
          </div>
        </div>

        <div className={styles.detailGrid}>
          <section className={styles.detailSection}>
            <h3>Contact</h3>
            <dl>
              <div className={styles.detailRow}>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </dd>
              </div>
              <div className={styles.detailRow}>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${user.phone}`}>{user.phone}</a>
                </dd>
              </div>
              <div className={styles.detailRow}>
                <dt>User ID</dt>
                <dd>{user.id}</dd>
              </div>
            </dl>
          </section>

          <section className={styles.detailSection}>
            <h3>Address</h3>
            <dl>
              <div className={styles.detailRow}>
                <dt>Street</dt>
                <dd>
                  {user.address.number} {user.address.street}
                </dd>
              </div>
              <div className={styles.detailRow}>
                <dt>City</dt>
                <dd>{user.address.city}</dd>
              </div>
              <div className={styles.detailRow}>
                <dt>ZIP code</dt>
                <dd>{user.address.zipcode}</dd>
              </div>
              <div className={styles.detailRow}>
                <dt>Coordinates</dt>
                <dd>
                  {user.address.geolocation.lat}, {user.address.geolocation.long}
                </dd>
              </div>
              <div className={styles.detailRow}>
                <dt>Record version</dt>
                <dd>{user.__v}</dd>
              </div>
            </dl>
          </section>
        </div>
      </section>
    </main>
  );
}
