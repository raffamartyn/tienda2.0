import axios from "axios";
import Papa from "papaparse";
import { Product} from "./type";

export default {
  List: async (): Promise<Product[]> => {
    //ropa de niños
    const url1 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRe0fxEJCNS05T5JGCtkm4o2oCdpQMuPGHZRl9VEVYAMgkZ5jqVsPb-xwRCzpQnf5zdIwQqS3yEGRp9/pub?output=csv';
     //ropa de dama
    const url2 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRe0fxEJCNS05T5JGCtkm4o2oCdpQMuPGHZRl9VEVYAMgkZ5jqVsPb-xwRCzpQnf5zdIwQqS3yEGRp9/pub?gid=1357591300&single=true&output=csv';
     //ropa de caballero
    const url3 = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRe0fxEJCNS05T5JGCtkm4o2oCdpQMuPGHZRl9VEVYAMgkZ5jqVsPb-xwRCzpQnf5zdIwQqS3yEGRp9/pub?gid=633279448&single=true&output=csv';

    const response1 = await axios.get(url1, { responseType: "blob" });
    const response2 = await axios.get(url2, { responseType: "blob" });
    const response3 = await axios.get(url3, { responseType: "blob" });

    const parsedData1 = await new Promise<any>((resolve, reject) => {
      Papa.parse(response1.data, {
        header: true,
        complete: (result) => {
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });

    const parsedData2 = await new Promise<any>((resolve, reject) => {
      Papa.parse(response2.data, {
        header: true,
        complete: (result) => {
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });

    const parsedData3 = await new Promise<any>((resolve, reject) => {
      Papa.parse(response3.data, {
        header: true,
        complete: (result) => {
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });

    const products1 = parsedData1.data as Product[];
    const products2 = parsedData2.data as Product[];
    const products3 = parsedData3.data as Product[];

    const allProducts = products1.concat(products2, products3);

    return new Promise<Product[]>((resolve, reject) => {
      if (allProducts.length > 0) {
        resolve(allProducts);
      } else {
        reject("No se encontraron productos");
      }
    });
  },
};
