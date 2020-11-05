/*
2.3.3.c - Housing Situation
Ask housing applicant if their current is temporary or homeless
*/
import Link from "next/link"
import Router from "next/router"
import {
  AppearanceStyleType,
  Button,
  FormCard,
  ProgressNav,
  t,
  Form,
} from "@bloom-housing/ui-components"
import FormsLayout from "../../../layouts/forms"
import { useForm } from "react-hook-form"
import { AppSubmissionContext } from "../../../lib/AppSubmissionContext"
import ApplicationConductor from "../../../lib/ApplicationConductor"
import { useContext, useMemo } from "react"

export default () => {
  const { conductor, application, listing } = useContext(AppSubmissionContext)
  const currentPageSection = 2

  /* Form Handler */
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => {
    console.log(data)

    Router.push("/applications/household/ada").then(() => window.scrollTo(0, 0))
  }

  return (
    <FormsLayout>
      <FormCard>
        <h5 className="font-alt-sans text-center mb-5">LISTING</h5>

        <ProgressNav
          currentPageSection={currentPageSection}
          completedSections={application.completedSections}
          labels={conductor.config.sections}
        />
      </FormCard>

      <FormCard>
        <p className="text-bold">
          <strong>
            <Link href="/applications/household/preferred-units">
              <a>{t("t.back")}</a>
            </Link>
          </strong>
        </p>

        <h2 className="form-card__title is-borderless">Housing Situation</h2>

        <hr />

        <Form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          (FORM)
          <div className="text-center mt-6">
            <Button
              type={AppearanceStyleType.primary}
              onClick={() => {
                //
              }}
            >
              Next
            </Button>
          </div>
        </Form>
      </FormCard>
    </FormsLayout>
  )
}
