import styles from "./loading.module.css"

export default function Loading() {
  return (
    <div>
      <span className={styles.loader}></span>
    </div>
  )
}