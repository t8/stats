import { query } from "../utils/gql";
import { exchangeWallet } from "../utils/constants";

export const getTradingPosts = async () => {
  const gensisTxs = (
    await query({
      query: `
    query($recipients: [String!]) {
      transactions(
        recipients: $recipients
        tags: [
          { name: "Exchange", values: "Verto" }
          { name: "Type", values: "Genesis" }
        ]
      ) {
        edges {
          node {
            owner {
              address
            }
          }
        }
      }
    }`,
      variables: {
        recipients: [exchangeWallet],
      },
    })
  ).data.transactions.edges;

  let posts: string[] = [];
  gensisTxs.map((tx) => {
    if (!posts.find((addr) => addr === tx.node.owner.address)) {
      posts.push(tx.node.owner.address);
    }
  });

  return posts;
};
