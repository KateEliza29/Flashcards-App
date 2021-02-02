const page = (pageName) => {
    return {
      type: 'PAGE',
      payload: pageName
    }
}

export default page;