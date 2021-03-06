// Transforme os seguintes trechos de código utilizando async/await:

import axios from "axios";

export default class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(response.data);
    } catch {
      console.log("Repositório não existe");
    }
  }
}

/*
export default class Github {
  static getRepositories(repo) {
    axios
      .get(`https://api.github.com/repos/${repo}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Repositório não existe");
      });
  }
}
*/
