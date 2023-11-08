const FaqSection = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-12">FAQ Section</h2>

      <div className="join join-vertical w-full bg-cyan-400">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            How can I book a sports session with an instructor?
          </div>
          <div className="collapse-content">
            <p>
              To book a sports session, simply browse our diverse selection of
              sports and fitness activities, choose an instructor, and select a
              convenient time slot. Follow the easy steps, and you will be all
              set to get active.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Are the instructors certified and experienced?
          </div>
          <div className="collapse-content">
            <p>
              Yes, all our instructors are certified professionals with
              extensive experience in their respective sports. They are
              committed to helping you improve your skills and achieve your
              fitness goals.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Can I track my progress and performance on the platform?
          </div>
          <div className="collapse-content">
            <p>
              Absolutely! We provide built-in tracking tools and performance
              metrics that allow you to monitor your fitness journey. You can
              see your progress over time and make data-driven decisions to
              enhance your performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
