import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic forms</title>
      </Head>

      <main className={styles.main}>
        <Typography>Welcome to DYNAMIC FORMS</Typography>
        <TextField
          id="101"
          name="productName"
          label="Product Name"
          type="text"
        />
        <TextField id="102" name="procedure" label="Procedure" type="text" />
        <TextField
          id="103"
          name="creationDate"
          label="Creation Date"
          type="date"
        />
        <TextField
          id="104"
          name="unitsProduced"
          label="units produced"
          type="number"
        />
        <Select id="105" value={1} label="location">
          <MenuItem value={1}>Boston</MenuItem>
          <MenuItem value={2}>Houston</MenuItem>
          <MenuItem value={3}>New York</MenuItem>
          <MenuItem value={4}>Barcelona</MenuItem>
        </Select>
        <Button variant="outlined">Save</Button>
      </main>
    </div>
  );
}
