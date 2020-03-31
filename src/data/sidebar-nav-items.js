export default function() {
  return [
    {
      title: "Blog Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
  ];
}
