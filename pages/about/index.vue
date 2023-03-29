<template lang="">
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          iste possimus consectetur enim ex quasi aliquam sunt corrupti culpa
          repellat voluptatum, maxime molestias suscipit aspernatur iusto odio
          tempora voluptates autem!
        </p>
        <Intro title="Lorem ipsum dolor sit amet" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          quo temporibus error amet itaque doloremque quisquam enim distinctio
          rem asperiores molestiae libero soluta beatae molestias dolor. Odio
          maxime temporibus perspiciatis?
        </p>
        <img src="@/assets/img/about.jpg" alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          quo temporibus error amet itaque doloremque quisquam enim distinctio
          rem asperiores molestiae libero soluta beatae molestias dolor. Odio
          maxime temporibus perspiciatis?
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head() {
    let title = "About My SSR Bkog!",
      descr = "About My SSR Bkog! With Nuxt.js!",
      type = "site";
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
      ],
    };
  },
};
</script>
<style lang="scss">
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
</style>
