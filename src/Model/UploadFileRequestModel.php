<?php

namespace App\Model;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;

class UploadFileRequestModel implements ModelInterface
{
    /**
     * @Assert\Length(
     *   min = 2,
     *   allowEmptyString = false,
     *   minMessage="The Caption should have at least 2 characters",
     * )
     * @Assert\NotBlank(message="Add a caption to your post")
     */
    private $caption;

    /**
     * @Assert\Length(
     *   min = 2,
     *   max="10",
     *   allowEmptyString = false,
     *   minMessage="The tags field should have at least one tag, 2 characters",
     *   maxMessage="A maximum of 10 letters is allowed for tags"
     * )
     * @Assert\NotBlank(message="Add tags to your post")
     */
    private $tags;

    /**
     * @Assert\NotBlank(message="Select a file in order to create post")
     */
    private $file;

    public function getCaption(): ?string
    {
        return $this->caption;
    }

    public function setCaption(?string $caption): self
    {
        $this->caption = $caption;

        return $this;
    }

    public function getTags(): ?string
    {
        return $this->tags;
    }

    public function setTags(?string $tags): self
    {
        $this->tags = $tags;

        return $this;
    }

    public function getFile(): ?UploadedFile
    {
        return $this->file;
    }

    public function setFile(?UploadedFile $file): self
    {
        $this->file = $file;

        return $this;
    }
}
