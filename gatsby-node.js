exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({
    fromPath: "/sponsor",
    toPath: "/sponsor.pdf",
    isPermanent: true,
  })
  createRedirect({
    fromPath: "/promo",
    toPath:
      "https://docs.google.com/document/d/1ly4fqNVvxZSvoVW3NTE5NoVtvD6nj2czLc7J1EUbNtY/edit?usp=sharing",
  })
  createRedirect({
    fromPath: "/waiver",
    toPath: "/waiver.pdf",
    isPermanent: true,
  })
}
