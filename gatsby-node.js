// The rest of your page, including imports, page component & page query etc.

export async function config() {
    // Optionally use GraphQL here
  
    return ({ params }) => {
      return {
        defer: true,
      }
    }
  }