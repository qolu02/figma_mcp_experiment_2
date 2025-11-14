export const BeliefsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Heading */}
          <div className="lg:col-span-3">
            <h3 className="font-inter font-semibold text-sm tracking-[0.56px] uppercase text-black">
              WHAT WE BELIEVE
            </h3>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-9">
            <div className="font-inter text-xl leading-relaxed text-black max-w-[822px]">
              <p className="mb-0">We believe in produce. Tasty produce. Produce like:</p>
              <p className="mb-6">&nbsp;</p>
              <p className="mb-0">
                Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.
              </p>
              <p className="mb-6">&nbsp;</p>
              <p className="mb-0">What are we forgetting?</p>
              <p className="mb-6">&nbsp;</p>
              <p className="mb-0">
                Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, "rocket"). Persian cucumbers, in addition to aforementioned "normal" cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we're vendors of organic produce, but if you asked us to describe what escaroles are...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
