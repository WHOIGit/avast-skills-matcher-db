from django_q.tasks import async_task
from templated_email import send_templated_mail
from skills_matcher_db.users.models import User


def new_project_email_test(user, project):
    print(user, project)
    context = {
        "project_title": project.title,
        "project_id": project.id,
    }

    async_task(
        "send_templated_mail",
        "new_project_notice",
        "noreply-skillsdb@whoi.edu",
        ["eandrews@whoi.edu"],
        context,
    )


def new_project_email(user, project):

    for u in User.objects.exclude(pk=user.pk):
        context = {
            "project_title": project.title,
            "project_id": project.id,
        }

        async_task(
            "send_templated_mail",
            "new_project_notice",
            "noreply-skillsdb@whoi.edu",
            [u.email],
            context,
        )
