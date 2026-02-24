import Link from 'next/link';

export default function OpportunitiesClient() {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-[11px] font-semibold tracking-[0.16em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            <span>Opportunities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-slate-900">
            Opportunities Radar
          </h1>
          <p className="text-sm sm:text-base text-slate-700">
            A simple place to map scholarships, competitions, internships, government jobs, and exchange programs so
            students do not miss important chances.
          </p>
          <p className="text-xs sm:text-sm text-slate-500">
            Over time, this can evolve into a full tracker with filters, links, and reminders.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900 mb-2">Scholarships & Grants</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              Highlight key local and international scholarships, including what they cover and who they suit.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>Undergraduate and postgraduate funding</li>
              <li>Country and field-based filters</li>
              <li>Basic application preparation notes</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900 mb-2">Internships, Jobs, Competitions</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              Use early work and project chances to build real experience before graduation.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>Internship and job boards worth checking</li>
              <li>Competition and hackathon ideas</li>
              <li>How to turn experience into CV stories</li>
              <li>Tracking certificates and project outcomes</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
            <h2 className="text-sm font-semibold text-slate-900 mb-2">Government & Exchange Programs</h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-3">
              Summaries and links for government jobs, civil tests, and student exchanges or mobility schemes.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>Key government job portals and exam sites</li>
              <li>Exchange and mobility programs by region</li>
              <li>Basic checklist before applying abroad</li>
              <li>Important documents to organise in advance</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="bg-sky-900 text-sky-50 rounded-2xl p-6 sm:p-7">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase mb-2">Opportunity Map</div>
            <p className="text-sm sm:text-base mb-3">
              Turn random links into a clear map of what to apply for this year and next.
            </p>
            <ul className="space-y-1.5 text-xs sm:text-[13px] text-sky-100">
              <li>List scholarships, jobs, and competitions in one place.</li>
              <li>Mark deadlines and eligibility for each opportunity.</li>
              <li>Decide which two or three to focus on first.</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-sky-100 p-6 sm:p-7">
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-sky-700 mb-2">
              Connect With Learning
            </div>
            <p className="text-sm text-slate-700 mb-3">
              Use career and study modules to decide which opportunities are worth full effort at your stage.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>Match scholarships with your current or planned field.</li>
              <li>Use CV and portfolio tips from the Earn area before applying.</li>
              <li>Combine opportunity planning with Global Scholar guidance.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
          <p>Learning modules and the Global Scholar area can send students here when an opportunity appears.</p>
          <div className="flex gap-3">
            <Link
              href="/global-scholar"
              className="inline-flex items-center gap-1 text-sky-700 font-semibold hover:text-sky-800"
            >
              <span>Open Global Scholar</span>
              <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="/creativity"
              className="inline-flex items-center gap-1 text-slate-700 font-semibold hover:text-slate-800"
            >
              <span>Go to Learning</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
