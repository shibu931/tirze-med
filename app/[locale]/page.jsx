import ContactForm from "@/components/Common/ContactForm";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getLocale, getTranslations } from "next-intl/server";
import ShopPage from "@/components/ShopPage/ShopPage";
import { HomeCarousel } from "@/components/Homepage/Carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default async function Home() {
  const locale = await getLocale()
  const t = await getTranslations('HomePage');
  return (<>
    <section className="">
      <div className="relative banner-img">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] z-10 banner-text text-center">
          <h1 className="text-center font-bold md:font-extrabold text-xl sm:text-2xl md:text-4xl uppercase text-white tracking-wider w-full">{t('title')}</h1>
          <Link className="banner-btn inline-block mt-4 text-white  px-4 py-1.5 font-semibold hover:cursor-pointer shadow-lg shadow-neutral-900/25 bg-fuchsia-800 rounded hover:bg-fuchsia-900" href="/shop">
            {t('banner_btn')}
          </Link>
        </div>
        <HomeCarousel />
      </div>
    </section>
    <main>
      <ShopPage />

      {
        locale === 'en' ? (<div className="text-gray-700 leading-5">
          <section className="pt-20 px-4">
            <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
              <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Tirzepatide, Semaglutide, Retatrutide, Cagrilintide.</h2>
              <p className="text-center text-xl text-gray-800">Peptides that are revolutionizing modern research are finally available.</p>
            </div>
            <p className="mb-2">At PeptideScience France, we offer active compounds used in the most advanced studies on weight management, glycemic regulation, and hormonal signaling.</p>
            <p className="mb-2">No empty promises. No smoke and mirrors.</p>
            <p className="mb-2">Just the molecules that serious research actually uses.</p>
            <div className="mx-auto pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Tirzepatide Card */}
                <div className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-8 bg-fuchsia-600 rounded-full mr-3"></div>
                      <h3 className="text-xl font-bold text-gray-900">Tirzepatide</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">What It Is</h4>
                        <p className="text-gray-700 mt-1">A novel dual agonist that targets both the GIP and GLP-1 receptors.</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Uses</h4>
                        <p className="text-gray-700 mt-1">Originally developed to improve blood sugar control in type 2 diabetes, it has also shown significant effects on weight reduction.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Semaglutide Card */}
                <div className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-8 bg-blue-600 rounded-full mr-3"></div>
                      <h3 className="text-xl font-bold text-gray-900">Semaglutide</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">What It Is</h4>
                        <p className="text-gray-700 mt-1">A well-established GLP-1 receptor agonist.</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Uses</h4>
                        <p className="text-gray-700 mt-1">Approved for the treatment of type 2 diabetes and, in higher doses, for weight management.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Retatrutide Card */}
                <div className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-8 bg-emerald-600 rounded-full mr-3"></div>
                      <h3 className="text-xl font-bold text-gray-900">Retatrutide</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">What It Is</h4>
                        <p className="text-gray-700 mt-1">An investigational multi-receptor agonist (targeting GLP-1, GIP, and glucagon receptors).</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Uses</h4>
                        <p className="text-gray-700 mt-1">Being studied for its potential to provide more robust metabolic benefits, including weight loss and improved blood sugar control.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cagrilintide Card */}
                <div className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-8 bg-purple-600 rounded-full mr-3"></div>
                      <h3 className="text-xl font-bold text-gray-900">Cagrilintide</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">What It Is</h4>
                        <p className="text-gray-700 mt-1">A novel, long-acting peptide analog of amylin.</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Uses</h4>
                        <p className="text-gray-700 mt-1">Under investigation for managing obesity and aiding in glycemic regulation.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="pt-20 px-4">
            <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
              <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Important Considerations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="p-4 border-l-4 rounded-xl shadow shadow-gray-200 border-fuchsia-800/50 bg-fuchsia-100">
                <h4 className="text-fuchsia-800 text-xl font-bold mb-2">Regulatory Status</h4>
                <p className="text-gray-700">Many of these compounds are prescription medications, and some are still under clinical investigation. Ensure that any product listings or marketing claims are fully compliant with applicable medical and regulatory guidelines.</p>
              </div>
              <div className="p-4 border-l-4 rounded-xl shadow shadow-gray-200 border-fuchsia-800/50 bg-fuchsia-100">
                <h4 className="text-fuchsia-800 text-xl font-bold mb-2">Usage Status</h4>
                <p className="text-gray-700">They should be used only under the supervision of a healthcare professional, given their potent effects on metabolism and glycemic control.</p>
              </div>
              <div className="p-4 border-l-4 rounded-xl shadow shadow-gray-200 border-fuchsia-800/50 bg-fuchsia-100">
                <h4 className="text-fuchsia-800 text-xl font-bold mb-2">Product Information</h4>
                <p className="text-gray-700">Always include detailed product information, usage instructions, and safety warnings when listing such items online.</p>
              </div>
            </div>
          </section>

          <section className="pt-20 px-4">
            <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
              <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Why use us? It's not a marketing issue.</h2>
            </div>
            <div className="grid grid-cols-12 gap-4 gap-y-6 lg:gap-6">
              <div className="col-span-12 md:col-span-7">
                <p className="mb-1.5">It's a question of mastery.</p>
                <p className="mb-1.5">Here, no obscure marketplaces, no fancy packaging, no Instagram filters.</p>
                <p className="mb-2">What we sell is raw, purified, traceable peptide.</p>
                <p className="mb-1.5"><strong>Point</strong></p>
                <p className="mb-1.5">Do you want to know exactly what's in the vial?</p>
                <p className="mb-1.5">We send you the HPLC analysis even before you confirm the order.</p>
                <p className="mb-1.5">Want to make sure the supply chain is clean?</p>
                <p className="mb-1.5">We do not use brokers or multi-product warehouses.</p>
                <p className="mb-1.5">Want to talk to someone who understands what "GCGR receptor" means?</p>
                <p className="mb-1.5">This site is not run by influencers.</p>
                <div className="bg-fuchsia-100 border border-fuchsia-300 rounded mt-4 p-4">
                  <h4 className="mb-2 font-semibold text-lg">Who is this site for?</h4>
                  <ul className="list-disc space-y-1.5">
                    <li>To professionals who build their research protocols with rigor</li>
                    <li>For advanced biohackers who want unmodified, no-nonsense compounds</li>
                    <li>To health/fitness entrepreneurs testing new nutritional models</li>
                    <li>To any serious, informed and responsible person</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <Image
                  src="/assets/why_choose_us.webp"
                  width={750}
                  height={750}
                  className="w-full"
                  alt="Why Choose Us"
                />
              </div>
            </div>
          </section>

          <section className="pt-20 px-4">
            <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
              <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">What we offer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="border p-4 rounded border-gray-300 shadow-md shadow-gray-400/50">
                <h4 className="text-xl font-bold mb-2">Cagrilintide + Semaglutide</h4>
                <p>Investigational duo targeting amylin and GLP-1 receptors, designed to prolong the feeling of satiety, reduce portion sizes and stabilize eating behavior.</p>
              </div>
              <div className="border p-4 rounded border-gray-300 shadow-md shadow-gray-400/50">
                <h4 className="text-xl font-bold mb-2">Tirzepatide</h4>
                <p>A breakthrough GLP-1/GIP agonist studied for its efficacy in weight loss, postprandial blood glucose management, and profound appetite modulation.</p>
              </div>
              <div className="border p-4 rounded border-gray-300 shadow-md shadow-gray-400/50">
                <h4 className="text-xl font-bold mb-2">Retatrutide</h4>
                <p>Triple agonist GLP-1 + GIP + GCGR. It combines thermogenic effect, reduction of visceral fat mass, and integrated metabolic stimulation.</p>
              </div>
            </div>
          </section>

          <section className="pt-20 px-4">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="my-auto">
                <h2 className="!text-3xl !font-bold uppercase !text-gray-900 !mb-4">Do you want to buy? Perfect.</h2>
                <p className="text-gray-700 mb-1.5">But you also have to understand what you're doing.</p>
                <p className="text-gray-700 mb-1.5">We are not here to convince.</p>
                <p className="text-gray-700 mb-1.5">We're here to provide. And protect the integrity of your research.</p>
                <p className="text-gray-700 mb-1.5">Tirzepatide, semaglutide, retatrutide or cagrilintide: choose wisely.</p>
                <p className="text-gray-700 mb-1.5">And work with the right tools, in the right place.</p>
                <div className="mt-4">
                  <h3 className="text-2xl mb-2 font-bold text-gray-900">Necessary Information</h3>
                  <p className="text-gray-700 mb-1.5">The products offered here are strictly reserved for experimental research.</p>
                  <p className="text-gray-700 mb-1.5">No human or animal consumption is permitted.</p>
                  <p className="text-gray-700 mb-1.5">This site is not a medical site, and does not provide any therapeutic advice.</p>
                  <p className="text-gray-700 mb-1.5">You assume full legal responsibility for the use of the product in your country.</p>
                </div>
              </div>
              <div>
                <Image
                  src="/assets/why_buy_us.svg"
                  width={400}
                  height={400}
                  className="w-full"
                  alt="But you also have to understand what you're doing."
                />
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
              <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                <div>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>1. What peptides are available on Tirze-Med.com?</AccordionTrigger>
                    <AccordionContent>
                      We offer high-purity research peptides, including Tirzepatide, Semaglutide, Retatrutide, and Cagrilintide. These compounds are used in advanced studies on weight management, glycemic regulation, and hormonal signaling.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>2. Are these peptides intended for human consumption?</AccordionTrigger>
                    <AccordionContent>
                      No. All products available on Tirze-Med.com are strictly for experimental research purposes. They are not intended for human or animal consumption.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>3. What is the difference between Tirzepatide, Semaglutide, Retatrutide, and Cagrilintide?</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc space-y-1.5">
                        <li><strong>Tirzepatide:</strong> Dual agonist (GIP + GLP-1), studied for weight management and glycemic control.</li>
                        <li><strong>Semaglutide:</strong>Well-established GLP-1 agonist, used for type 2 diabetes and weight loss.</li>
                        <li><strong>Retatrutide:</strong>Triple agonist (GLP-1 + GIP + GCGR), under investigation for its advanced metabolic effects.</li>
                        <li><strong>Cagrilintide:</strong>Long-acting amylin analogue, studied for obesity and glycemic regulation.</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  {/* </Accordion> */}
                </div>
                <div>
                  {/* <Accordion type="single" collapsible> */}
                  <AccordionItem value="item-4">
                    <AccordionTrigger>4. How do you ensure the quality and traceability of peptides?</AccordionTrigger>
                    <AccordionContent>
                      We provide an HPLC analysis before order confirmation. Our products are traceable, purified, and do not pass through questionable intermediaries, ensuring optimal quality.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>5. Who is Tirze-Med.com intended for?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our products are intended for researchers, advanced biohackers, and professionals in the health and nutrition sector who wish to conduct rigorous studies on these molecules.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>6. How can I order in compliance with regulations?</AccordionTrigger>
                    <AccordionContent>
                      Before ordering, you must ensure that the use of peptides complies with the regulations in your country. By purchasing from Tirze-Med.com, you assume full legal responsibility for their use.
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </Accordion>
          </section>
        </div>) : (
          <div className="text-gray-700 leading-5">
            <section className="pt-20 px-4">
              <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
                <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Tirzepatide, Semaglutide, Retatrutide, Cagrilintide.</h2>
                <p className="text-center text-xl text-gray-800">Les peptides qui bousculent la recherche moderne sont enfin disponibles.</p>
              </div>
              <p className="mb-2">Chez PeptideScience France, nous proposons des composés actifs utilisés dans les études les plus avancées sur la gestion du poids, la régulation glycémique et la signalisation hormonale.</p>
              <p className="mb-2">Pas de promesse creuse. Pas de poudre aux yeux.</p>
              <p className="mb-2">Juste les molécules que la recherche sérieuse utilise vraiment.</p>
              <div className="mx-auto pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Tirzepatide Card */}
                  <div className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-8 bg-fuchsia-600 rounded-full mr-3"></div>
                        <h3 className="text-xl font-bold text-gray-900">Tirzépatide</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Qu'est-ce que c'est </h4>
                          <p className="text-gray-700 mt-1">Un nouvel agoniste double qui cible à la fois les récepteurs GIP et GLP-1.</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Utilisations</h4>
                          <p className="text-gray-700 mt-1">Développé initialement pour améliorer le contrôle de la glycémie dans le diabète de type 2, il a également démontré des effets significatifs sur la réduction du poids.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Semaglutide Card */}
                  <div className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-8 bg-blue-600 rounded-full mr-3"></div>
                        <h3 className="text-xl font-bold text-gray-900">Sémaglutide</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Qu'est-ce que c'est</h4>
                          <p className="text-gray-700 mt-1">Un agoniste du récepteur GLP-1 bien établi.</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Utilisations</h4>
                          <p className="text-gray-700 mt-1">Approuvé pour le traitement du diabète de type 2 et, à doses plus élevées, pour la gestion du poids.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Retatrutide Card */}
                  <div className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-8 bg-emerald-600 rounded-full mr-3"></div>
                        <h3 className="text-xl font-bold text-gray-900">Retatrutide</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Qu'est-ce que c'est</h4>
                          <p className="text-gray-700 mt-1">Un composé en cours d'investigation, exploré comme agoniste multi-récepteur (ciblant les récepteurs GLP-1, GIP et le glucagon).</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Utilisations</h4>
                          <p className="text-gray-700 mt-1">Étudié pour son potentiel à offrir des avantages métaboliques plus robustes, incluant la perte de poids et l'amélioration du contrôle de la glycémie.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cagrilintide Card */}
                  <div className="bg-white shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-3 h-8 bg-purple-600 rounded-full mr-3"></div>
                        <h3 className="text-xl font-bold text-gray-900">Cagrilintide</h3>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Qu'est-ce que c'est</h4>
                          <p className="text-gray-700 mt-1">Un nouvel analogue peptidique à action prolongée de l'amiline.</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Utilisations</h4>
                          <p className="text-gray-700 mt-1">En cours d'investigation pour la gestion de l'obésité et l'aide à la régulation glycémique.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            <section className="pt-20 px-4">
              <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
                <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Considérations importantes</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
                <div className="p-4 border-l-4 rounded-xl shadow shadow-gray-200 border-fuchsia-800/50 bg-fuchsia-100">
                  <h4 className="text-fuchsia-800 text-xl font-bold mb-2">Statut réglementaire</h4>
                  <p className="text-gray-700">Beaucoup de ces composés sont des médicaments soumis prescription, et certains sont encore en phase d'investigation clinique. Assurez-vous que toute description ou revendication produit soit conforme aux directives médicales et réglementaires en vigueur.</p>
                </div>
                <div className="p-4 border-l-4 rounded-xl shadow shadow-gray-200 border-fuchsia-800/50 bg-fuchsia-100">
                  <h4 className="text-fuchsia-800 text-xl font-bold mb-2">Utilisation</h4>
                  <p className="text-gray-700">Ils doivent être utilisés uniquement sous la supervision d’un professionnel de la santé, compte tenu de leurs effets puissants sur le métabolisme et le contrôle de la glycémie.</p>
                </div>
                <div className="p-4 border-l-4 rounded-xl shadow shadow-gray-200 border-fuchsia-800/50 bg-fuchsia-100">
                  <h4 className="text-fuchsia-800 text-xl font-bold mb-2">Informations sur le produit</h4>
                  <p className="text-gray-700">Incluez toujours des informations détaillées sur le produit, des instructions d’utilisation et des avertissements de sécurité lors de la mise en ligne.</p>
                </div>
              </div>
            </section>

            <section className="pt-20 px-4">
              <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
                <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Pourquoi passer par nous ? Ce n’est pas une question de marketing.</h2>
              </div>
              <div className="grid grid-cols-12 gap-4 gap-y-6 lg:gap-6">
                <div className="col-span-12 md:col-span-7">
                  <p className="mb-1.5">C’est une question de maîtrise.</p>
                  <p className="mb-1.5">Ici, pas de marketplace obscure, pas de packaging fantaisiste, pas de filtres Instagram.</p>
                  <p className="mb-2">Ce que nous vendons, c’est du peptide brut, purifié, traçable.</p>
                  <p className="mb-1.5"><strong>Point</strong></p>
                  <p className="mb-1.5">Tu veux savoir ce que contient exactement la fiole ?
                  </p>
                  <p className="mb-1.5">On t’envoie l’analyse HPLC avant même que tu confirmes la commande.</p>
                  <p className="mb-1.5">Tu veux t’assurer que la chaîne logistique est propre ?</p>
                  <p className="mb-1.5">On ne passe ni par des brokers, ni par des entrepôts multi-produits.</p>
                  <p className="mb-1.5">Tu veux parler à quelqu’un qui comprend ce que signifie « récepteur GCGR » ?</p>
                  <p className="mb-1.5">Ce site n’est pas géré par des influenceurs.</p>
                  <div className="bg-fuchsia-100 border border-fuchsia-300 rounded mt-4 p-4">
                    <h4 className="mb-2 font-semibold text-lg">À qui s’adresse ce site ?</h4>
                    <ul className="list-disc space-y-1.5">
                      <li>Aux professionnels qui construisent leurs protocoles de recherche avec rigueur</li>
                      <li>Aux biohackers avancés qui veulent des composés non modifiés, sans fioritures</li>
                      <li>Aux entrepreneurs du secteur santé/forme qui testent des modèles nutritionnels nouveaux</li>
                      <li>À toute personne sérieuse, informée et responsable</li>
                    </ul>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <Image
                    src="/assets/why_choose_us.webp"
                    width={750}
                    height={750}
                    className="w-full"
                    alt="À qui s’adresse ce site ?"
                  />
                </div>
              </div>
            </section>

            <section className="pt-20 px-4">
              <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
                <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Ce que nous proposons</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div className="border p-4 rounded border-gray-300 shadow-md shadow-gray-400/50">
                  <h4 className="text-xl font-bold mb-2">Cagrilintide + Semaglutide</h4>
                  <p>Duo expérimental ciblant les récepteurs amylin et GLP-1, conçu pour allonger la sensation de satiété, réduire les portions et stabiliser le comportement alimentaire.</p>
                </div>
                <div className="border p-4 rounded border-gray-300 shadow-md shadow-gray-400/50">
                  <h4 className="text-xl font-bold mb-2">Tirzepatide</h4>
                  <p>Un agoniste GLP-1/GIP révolutionnaire étudié pour son efficacité sur la perte de poids, la gestion de la glycémie postprandiale et la modulation profonde de l’appétit.</p>
                </div>
                <div className="border p-4 rounded border-gray-300 shadow-md shadow-gray-400/50">
                  <h4 className="text-xl font-bold mb-2">Retatrutide</h4>
                  <p>Triple agoniste GLP-1 + GIP + GCGR. Il combine effet thermogénique, réduction de la masse grasse viscérale, et stimulation métabolique intégrée.</p>
                </div>
              </div>
            </section>

            <section className="pt-20 px-4">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="my-auto">
                  <h2 className="!text-3xl !font-bold uppercase !text-gray-900 !mb-4">Tu veux acheter ? Parfait.</h2>
                  <p className="text-gray-700 mb-1.5">Mais tu dois aussi comprendre ce que tu fais.</p>
                  <p className="text-gray-700 mb-1.5">Nous ne sommes pas ici pour convaincre.</p>
                  <p className="text-gray-700 mb-1.5">Nous sommes ici pour fournir. Et protéger l’intégrité de ta recherche.</p>
                  <p className="text-gray-700 mb-1.5">Tirzepatide, semaglutide, retatrutide ou cagrilintide : choisis en connaissance de cause.</p>
                  <p className="text-gray-700 mb-1.5">Et travaille avec les bons outils, au bon endroit.</p>
                  <div className="mt-4">
                    <h3 className="text-2xl mb-2 font-bold text-gray-900">Mentions nécessaires</h3>
                    <p className="text-gray-700 mb-1.5">Les produits proposés ici sont strictement réservés à la recherche expérimentale.</p>
                    <p className="text-gray-700 mb-1.5">Aucune consommation humaine ou animale n’est autorisée.</p>
                    <p className="text-gray-700 mb-1.5">Ce site n’est pas un site médical, et ne donne aucun avis thérapeutique.</p>
                    <p className="text-gray-700 mb-1.5">Tu assumes l’entière responsabilité légale de l’utilisation du produit dans ton pays.</p>
                  </div>
                </div>
                <div>
                  <Image
                    src="/assets/why_buy_us.svg"
                    width={400}
                    height={400}
                    className="w-full"
                    alt="Mentions nécessaires"
                  />
                </div>
              </div>
            </section>

            <section className="py-20 px-4">
              <div className="leading-line max-w-4xl mx-auto mb-6 pb-2">
                <h2 className="text-center !text-3xl !font-bold uppercase !text-gray-900 !mb-1">Foire aux questions</h2>
              </div>
              <Accordion type="single" collapsible>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                  <div>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>1. Quels sont les peptides proposés sur Tirze-Med.com ?</AccordionTrigger>
                      <AccordionContent>
                        Nous proposons des peptides de recherche de haute pureté, dont le Tirzepatide, Semaglutide, Retatrutide et Cagrilintide. Ces composés sont utilisés dans les études avancées sur la gestion du poids, la régulation glycémique et la signalisation hormonale.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>2. Ces peptides sont-ils destinés à la consommation humaine ?</AccordionTrigger>
                      <AccordionContent>
                        Non. Tous les produits disponibles sur Tirze-Med.com sont strictement réservés à la recherche expérimentale. Ils ne sont pas destinés à la consommation humaine ou animale.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>3. Quelle est la différence entre Tirzepatide, Semaglutide, Retatrutide et Cagrilintide ?</AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc space-y-1.5">
                          <li><strong>Tirzepatide:</strong> Agoniste double (GIP + GLP-1), étudié pour la gestion du poids et le contrôle glycémique.</li>
                          <li><strong>Semaglutide:</strong> Agoniste GLP-1 bien établi, utilisé pour le diabète de type 2 et la perte de poids.</li>
                          <li><strong>Retatrutide:</strong> Triple agoniste (GLP-1 + GIP + GCGR), en cours d'étude pour ses effets métaboliques avancés.</li>
                          <li><strong>Cagrilintide:</strong> Analogue de l’amiline à action prolongée, étudié pour l’obésité et la régulation glycémique.</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    {/* </Accordion> */}
                  </div>
                  <div>
                    {/* <Accordion type="single" collapsible> */}
                    <AccordionItem value="item-4">
                      <AccordionTrigger>4. Comment garantir la qualité et la traçabilité des peptides ?</AccordionTrigger>
                      <AccordionContent>
                        Nous fournissons une analyse HPLC avant confirmation de commande. Nos produits sont traçables, purifiés et ne passent par aucun intermédiaire douteux, garantissant une qualité optimale.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>5. À qui s’adresse Tirze-Med.com ?
                      </AccordionTrigger>
                      <AccordionContent>
                        Nos produits sont destinés aux chercheurs, biohackers avancés et professionnels du secteur de la santé et de la nutrition, qui souhaitent mener des études rigoureuses sur ces molécules.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                      <AccordionTrigger>6. Comment commander en toute conformité ?</AccordionTrigger>
                      <AccordionContent>
                        Avant toute commande, vous devez vous assurer que l'utilisation des peptides est conforme aux réglementations en vigueur dans votre pays. En achetant sur Tirze-Med.com, vous assumez l’entière responsabilité légale de leur utilisation.
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                </div>
              </Accordion>
            </section>
          </div>
        )
      }


    </main>
  </>
  );
}
