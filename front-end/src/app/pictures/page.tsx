"use client";

import styles from "./pictures.module.css";
import { IconImageDown } from "@/modules/app.modules";
import Image from "next/image";
import test from "../../../public/test/1733577396352.png"
import { useEffect, useState } from "react";

interface Picture {
  name: string;
  url: string;
  data: string;
}

export default function Pictures() {

  const [dataState, setDataState] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await fetch(process.env.NEXT_PUBLIC_PICTURES as string);
        if (request.ok) {
          const api = await request.json();
          setDataState(api.data);

        } else {
          throw new Error(`HTTP error! Status: ${request.status}`)
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (dataState.length > 0) {
    return (
      <section className={styles.content}>
        <h1>
          Lista de imagens:
        </h1>

        <ul className={styles.ulCard}>
          {
            dataState.map((picture: Picture, index) => (
              <li key={index} className={`
                  ${styles.card}
                  art:border:solid
                  art:border:s-01
                  art:border:white-03

                  art:hover:bg:white-03`
              }>
                <a className={styles.link} href={picture.url} download={picture.name}>
                  <div className={styles.cardContent}>
                    <div className={styles.infosBox}>
                      <Image style={{
                        "width": "80px",
                        "height": "80px",
                        "objectFit": "cover",
                        "borderRadius": "0.5rem"
                      }} src={test} alt="test" />

                      <div className={styles.data}>
                        <p className={`${styles.name} art:ft:black-01`}>{picture.name}</p>
                        <p className={`${styles.infos} art:ft:black-02`}>Infos: {picture.data}</p>
                      </div>
                    </div>

                    <IconImageDown className="art:ft:black-01" />
                  </div>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    );
  } else {
    return (
      <section className={styles.content}>

        <p className="art:ft:normal-02 art:ft:black-03">Nenhuma imagem recebida.</p>

        {/*         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse quidem nihil, obcaecati iusto iure nemo quae expedita, blanditiis qui at perspiciatis recusandae earum sit officiis enim commodi dicta! Velit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eligendi minima molestiae suscipit facere praesentium nostrum ipsam eveniet quis. Accusamus rem voluptas asperiores explicabo facere quidem labore numquam aspernatur distinctio?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia sapiente placeat, sequi magnam quos rerum excepturi nesciunt explicabo. Ratione nulla optio incidunt perspiciatis doloremque accusamus repellendus modi omnis delectus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ad voluptatum quod mollitia dolorum! Asperiores harum eligendi delectus. Sint illo et quaerat esse provident obcaecati sequi nihil asperiores est?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae assumenda minima voluptates eum autem. Earum sed et, molestias reprehenderit, repellat accusamus recusandae consequatur quam provident repellendus praesentium totam expedita.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis facere rem corrupti repellat illo? Eligendi nihil, aliquid officiis laudantium deleniti, minima ex reprehenderit iusto nemo ducimus reiciendis impedit dolores.
          banna
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse quidem nihil, obcaecati iusto iure nemo quae expedita, blanditiis qui at perspiciatis recusandae earum sit officiis enim commodi dicta! Velit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eligendi minima molestiae suscipit facere praesentium nostrum ipsam eveniet quis. Accusamus rem voluptas asperiores explicabo facere quidem labore numquam aspernatur distinctio?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia sapiente placeat, sequi magnam quos rerum excepturi nesciunt explicabo. Ratione nulla optio incidunt perspiciatis doloremque accusamus repellendus modi omnis delectus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ad voluptatum quod mollitia dolorum! Asperiores harum eligendi delectus. Sint illo et quaerat esse provident obcaecati sequi nihil asperiores est?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae assumenda minima voluptates eum autem. Earum sed et, molestias reprehenderit, repellat accusamus recusandae consequatur quam provident repellendus praesentium totam expedita.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis facere rem corrupti repellat illo? Eligendi nihil, aliquid officiis laudantium deleniti, minima ex reprehenderit iusto nemo ducimus reiciendis impedit dolores.
          banna
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse quidem nihil, obcaecati iusto iure nemo quae expedita, blanditiis qui at perspiciatis recusandae earum sit officiis enim commodi dicta! Velit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eligendi minima molestiae suscipit facere praesentium nostrum ipsam eveniet quis. Accusamus rem voluptas asperiores explicabo facere quidem labore numquam aspernatur distinctio?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia sapiente placeat, sequi magnam quos rerum excepturi nesciunt explicabo. Ratione nulla optio incidunt perspiciatis doloremque accusamus repellendus modi omnis delectus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ad voluptatum quod mollitia dolorum! Asperiores harum eligendi delectus. Sint illo et quaerat esse provident obcaecati sequi nihil asperiores est?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae assumenda minima voluptates eum autem. Earum sed et, molestias reprehenderit, repellat accusamus recusandae consequatur quam provident repellendus praesentium totam expedita.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis facere rem corrupti repellat illo? Eligendi nihil, aliquid officiis laudantium deleniti, minima ex reprehenderit iusto nemo ducimus reiciendis impedit dolores.
          banna
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse quidem nihil, obcaecati iusto iure nemo quae expedita, blanditiis qui at perspiciatis recusandae earum sit officiis enim commodi dicta! Velit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eligendi minima molestiae suscipit facere praesentium nostrum ipsam eveniet quis. Accusamus rem voluptas asperiores explicabo facere quidem labore numquam aspernatur distinctio?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia sapiente placeat, sequi magnam quos rerum excepturi nesciunt explicabo. Ratione nulla optio incidunt perspiciatis doloremque accusamus repellendus modi omnis delectus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ad voluptatum quod mollitia dolorum! Asperiores harum eligendi delectus. Sint illo et quaerat esse provident obcaecati sequi nihil asperiores est?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae assumenda minima voluptates eum autem. Earum sed et, molestias reprehenderit, repellat accusamus recusandae consequatur quam provident repellendus praesentium totam expedita.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis facere rem corrupti repellat illo? Eligendi nihil, aliquid officiis laudantium deleniti, minima ex reprehenderit iusto nemo ducimus reiciendis impedit dolores.
          banna
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse quidem nihil, obcaecati iusto iure nemo quae expedita, blanditiis qui at perspiciatis recusandae earum sit officiis enim commodi dicta! Velit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eligendi minima molestiae suscipit facere praesentium nostrum ipsam eveniet quis. Accusamus rem voluptas asperiores explicabo facere quidem labore numquam aspernatur distinctio?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia sapiente placeat, sequi magnam quos rerum excepturi nesciunt explicabo. Ratione nulla optio incidunt perspiciatis doloremque accusamus repellendus modi omnis delectus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ad voluptatum quod mollitia dolorum! Asperiores harum eligendi delectus. Sint illo et quaerat esse provident obcaecati sequi nihil asperiores est?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae assumenda minima voluptates eum autem. Earum sed et, molestias reprehenderit, repellat accusamus recusandae consequatur quam provident repellendus praesentium totam expedita.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis facere rem corrupti repellat illo? Eligendi nihil, aliquid officiis laudantium deleniti, minima ex reprehenderit iusto nemo ducimus reiciendis impedit dolores.
          banna
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse quidem nihil, obcaecati iusto iure nemo quae expedita, blanditiis qui at perspiciatis recusandae earum sit officiis enim commodi dicta! Velit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eligendi minima molestiae suscipit facere praesentium nostrum ipsam eveniet quis. Accusamus rem voluptas asperiores explicabo facere quidem labore numquam aspernatur distinctio?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia sapiente placeat, sequi magnam quos rerum excepturi nesciunt explicabo. Ratione nulla optio incidunt perspiciatis doloremque accusamus repellendus modi omnis delectus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ad voluptatum quod mollitia dolorum! Asperiores harum eligendi delectus. Sint illo et quaerat esse provident obcaecati sequi nihil asperiores est?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae assumenda minima voluptates eum autem. Earum sed et, molestias reprehenderit, repellat accusamus recusandae consequatur quam provident repellendus praesentium totam expedita.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis facere rem corrupti repellat illo? Eligendi nihil, aliquid officiis laudantium deleniti, minima ex reprehenderit iusto nemo ducimus reiciendis impedit dolores.
          banna
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse quidem nihil, obcaecati iusto iure nemo quae expedita, blanditiis qui at perspiciatis recusandae earum sit officiis enim commodi dicta! Velit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eligendi minima molestiae suscipit facere praesentium nostrum ipsam eveniet quis. Accusamus rem voluptas asperiores explicabo facere quidem labore numquam aspernatur distinctio?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab officia sapiente placeat, sequi magnam quos rerum excepturi nesciunt explicabo. Ratione nulla optio incidunt perspiciatis doloremque accusamus repellendus modi omnis delectus.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, suscipit ad voluptatum quod mollitia dolorum! Asperiores harum eligendi delectus. Sint illo et quaerat esse provident obcaecati sequi nihil asperiores est?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vitae assumenda minima voluptates eum autem. Earum sed et, molestias reprehenderit, repellat accusamus recusandae consequatur quam provident repellendus praesentium totam expedita.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis facere rem corrupti repellat illo? Eligendi nihil, aliquid officiis laudantium deleniti, minima ex reprehenderit iusto nemo ducimus reiciendis impedit dolores.
          banna
        </p> */}
      </section>
    );
  }
}