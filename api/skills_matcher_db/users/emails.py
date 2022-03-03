from django.core.mail import send_mail
from .models import Engagement


def send_email_expert(user, expert, projects=None):
    """
    send the initial email to an expert requesting support
    """

    try:
        send_mail(
            subject,
            "Here is the message.",
            None,
            ["to@example.com"],
            fail_silently=False,
        )

    except Exception as e:
        print(e)
        return "Email failed"
