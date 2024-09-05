import styles from "@/styles/Home.module.css";
import { Box, BoxGreenBackground } from "../components/box";
import Round from "../components/round";
import BlogPost from "@/components/card";
import { ArrowIcon } from "@/components/icon/ArrowIcon";
import moment from "moment";
import { Trending } from "@/components/trending/trending";

export default function Page() {
  const published_at = "2024-08-24T13:52:17Z";
  return (
    <div className="container max-w-screen-xl mx-auto">
      {/* <div className=" flex border-dashed border-2 border-red-500">
        <div className="hidden">1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="text-center sm:text-left lg:text-right sm:flex">
        helloo
      </div>
      <div>{moment("2024-08-24T13:52:17Z").format("ll")}</div>
      <div>{moment(published_at).format("ll")}</div>
      <div>{new Date().getMonth()}</div>
      <div>{new Date().getDay()}</div>
      <div>{new Date().getFullYear()}</div> */}
      <Trending />
    </div>
  );
}

// export default function Page() {
//   return (
//     <div className={styles.App}>

//       {/* <Box />
//       <Round />
//       <Box />
//       <Box />
//       <Round />
//       <Box />
//       <BoxGreenBackground /> */}
//       {/* <img src="user-card.png" style={{ width: "300px", height: "200px" }} /> */}
//       {/* <ArrowIcon /> */}
//       {/* <BlogPost
//         title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
//         body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       />
//       <BlogPost
//         title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
//         body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       />
//       <BlogPost
//         title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
//         body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       />
//       <BlogPost
//         title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
//         body="quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       /> */}
//     </div>
//   );
// }
