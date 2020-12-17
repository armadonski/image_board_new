<?php

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

class UserRegistrationModel implements ModelInterface
{
    /**
     * @Assert\NotBlank(message="Nickname should not be empty")
     * @Assert\Length(min=5, minMessage="Your Nickname should have at least 5 characters")
     */
    private $nickname;

    /**
     * @Assert\NotBlank(message="E-mail should not be empty")
     * @Assert\Email(message="Please enter a valid e-mail address")
     */
    private $email;

    /**
     * @Assert\NotBlank(message="Password should not be empty")
     * @Assert\Regex(pattern="/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/", message="Password should have minimum eight characters, at least one letter and one number")
     */
    private $password;

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(?string $nickname): self
    {
        $this->nickname = $nickname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(?string $password): self
    {
        $this->password = $password;

        return $this;
    }
}