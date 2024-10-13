import web from "../../css_style/web.module.css";

const Webdesign = () => {
  return (
    <div className={web.container}>
      <h1 className={web.h1tag}>Web Design</h1>
      <img src="/images/dol.avif" alt=""  className={web.img} />
      <p className={web.pera}>
        Web design is the process of creating websites and web applications. It
        involves using visual design principles, coding languages, and user
        experience design to create engaging and functional websites. Web
        designers work closely with developers to create a visually appealing
        and user-friendly website.
      </p>
    </div>
  );
};

export default Webdesign;
